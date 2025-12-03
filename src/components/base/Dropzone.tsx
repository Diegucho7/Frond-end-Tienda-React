import classNames from 'classnames';
import {
  Accept,
  DropEvent,
  FileRejection,
  DropzoneProps as ReactDropZoneProps,
  useDropzone
} from 'react-dropzone';
import Button from './Button';
import imageIcon from 'assets/img/icons/image-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { useEffect, useMemo, useState, useRef } from 'react';
import AttachmentPreview, { FileAttachment } from 'components/common/AttachmentPreview';
import { convertFileToAttachment } from 'helpers/utils';
import ImageAttachmentPreview from 'components/common/ImageAttachmentPreview';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
const API_URL = import.meta.env.VITE_API_URL;

interface DropzoneProps {
  className?: string;
  size?: 'sm';
  reactDropZoneProps?: ReactDropZoneProps;
  accept?: Accept;
  noPreview?: boolean;
  multiple?: boolean;
  previewHight?: number;
  previewWidth?: number;
  defaultFiles?: (File | string)[];
  setPhotos?: Dispatch<SetStateAction<(File | string)[]>>;
  onDrop?: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
}

const Dropzone = ({
  className,
  size,
  onDrop,
  accept,
  defaultFiles = [],
  noPreview,
  reactDropZoneProps,
  multiple = true,
  previewHight,
  previewWidth,
  setPhotos,
  children
}: PropsWithChildren<DropzoneProps>) => {
  const [files, setFiles] = useState<(File | string)[]>(defaultFiles || []);
  const [previews, setPreviews] = useState<FileAttachment[]>([]);

  // ✅ función corregida con notificaciones
  const handleRemovePhoto = async (index: number) => {
    const photo = files[index];

    // Si es una URL (imagen ya guardada en servidor)
    if (typeof photo === 'string') {
      try {
        const fileName = photo.split('/').pop();
        if (!fileName) {
          toast.error('No se pudo identificar la imagen');
          return;
        }

        const resp = await fetch(`${API_URL}/api/uploads/${fileName}`, {
          method: 'DELETE',
        });

        const data = await resp.json();
        if (!resp.ok) {
          toast.error(data.msg || 'Error al eliminar imagen del servidor');
          return;
        }

        toast.success('Imagen eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar imagen', error);
        toast.error('Error al eliminar la imagen');
        return;
      }
    } else {
      // Es un archivo local (aún no guardado en servidor)
      toast.success('Imagen removida');
    }

    // Elimina del estado local
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPhotos?.(prev => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (...args) => {
      const [acceptedFiles] = args;
      setFiles(prev => [...prev, ...acceptedFiles]);
      setPreviews(acceptedFiles.map(file => convertFileToAttachment(file)));
      if (onDrop) onDrop(...args);
    },
    multiple,
    accept,
    ...reactDropZoneProps
  });

  const imageOnly = useMemo(() => Boolean(accept && accept['image/*']), [accept]);

  // Sincronizar defaultFiles solo cuando cambie la longitud o el contenido
  useEffect(() => {
    // Evitar bucle infinito: solo actualizar si hay diferencia real
    const defaultFilesStr = JSON.stringify(defaultFiles.map(f => typeof f === 'string' ? f : f.name));
    const filesStr = JSON.stringify(files.map(f => typeof f === 'string' ? f : f.name));

    if (defaultFiles.length > 0 && defaultFilesStr !== filesStr) {
      setFiles(defaultFiles);
    }
  }, [defaultFiles]);

  // Notificar al padre solo cuando files cambie por acción del usuario (no por defaultFiles)
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Solo notificar si setPhotos existe y no es la sincronización inicial
    if (setPhotos) {
      setPhotos(files);
    }
  }, [files]);

  return (
    <>
      <div
        {...getRootProps()}
        className={classNames(className, 'dropzone', {
          'dropzone-sm': size === 'sm',
          'dropzone-multiple': multiple
        })}
      >
        <input {...getInputProps()} />
        {children ? (
          <>{children}</>
        ) : (
          <div className="text-body-tertiary text-opacity-85 fw-bold fs-9">
            Drag your {imageOnly ? 'photo' : 'files'} here{' '}
            <span className="text-body-secondary">or </span>
            <Button variant="link" className="p-0">
              Browse from device
            </Button>
            <br />
            <img
              className="mt-3"
              src={imageIcon}
              width={size === 'sm' ? 24 : 40}
              alt=""
            />
          </div>
        )}
      </div>

      {/* Preview de archivos no imagen */}
      {!imageOnly &&
        previews.map((file, index) => (
          <div
            key={index}
            className="border-bottom border-translucent d-flex align-items-center justify-content-between py-3"
          >
            <AttachmentPreview attachment={file} />
            <button className="btn p-0" onClick={() => handleRemovePhoto(index)}>
              <FontAwesomeIcon icon={faTrashAlt} className="fs-0" />
            </button>
          </div>
        ))}

      {/* Preview de imágenes */}
      {imageOnly && !noPreview && files.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mt-3">
          {files.map((file, index) => {
            const imageUrl =
              typeof file === 'string'
                ? file.startsWith('http')
                  ? file
                  : `${API_URL}/api/uploads/productos/${file}`
                : URL.createObjectURL(file);

            return (
              <ImageAttachmentPreview
                key={typeof file === 'string' ? file : file.name}
                image={imageUrl}
                previewWidth={previewWidth}
                previewHight={previewHight}
                handleClose={() => handleRemovePhoto(index)} // ✅ corregido
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Dropzone;
