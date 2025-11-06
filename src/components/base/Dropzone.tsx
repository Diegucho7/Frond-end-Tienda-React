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
import { useEffect, useMemo, useState } from 'react';
import AttachmentPreview, { FileAttachment } from 'components/common/AttachmentPreview';
import { convertFileToAttachment } from 'helpers/utils';
import ImageAttachmentPreview from 'components/common/ImageAttachmentPreview';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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

  // ✅ función corregida
  const handleRemovePhoto = async (index: number) => {
    const photo = files[index]; // antes usaba photos, que no existe

    // Si es una URL (imagen ya guardada en servidor)
    if (typeof photo === 'string') {
      try {
        const fileName = photo.split('/').pop();
        if (!fileName) return;

        const resp = await fetch(`http://localhost:3000/api/uploads/${fileName}`, {
          method: 'DELETE',
        });

        const data = await resp.json();
        if (!resp.ok) {
          console.error('Error al eliminar imagen del servidor', data);
        } else {
          console.log('Imagen eliminada correctamente');
        }
      } catch (error) {
        console.error('Error al eliminar imagen', error);
      }
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

  useEffect(() => {
    if (defaultFiles.length > 0) setFiles(defaultFiles);
  }, [defaultFiles]);

  useEffect(() => {
    if (setPhotos) setPhotos(files);
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
                  : `http://localhost:3000/api/uploads/productos/${file}`
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
