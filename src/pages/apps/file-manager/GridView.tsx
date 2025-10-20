import FileManagerContent from 'components/modules/file-manager/FileManagerContent';
import FileManagerLayout from 'layouts/FileManagerLayout';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import { useEffect } from 'react';

const GridView = () => {
  const { setIsGridView, setCheckedFileIds } = useFileManagerContext();
  useEffect(() => {
    setIsGridView(true);
    setCheckedFileIds([]);
  }, []);

  return (
    <FileManagerLayout>
      <FileManagerContent />
    </FileManagerLayout>
  );
};

export default GridView;
