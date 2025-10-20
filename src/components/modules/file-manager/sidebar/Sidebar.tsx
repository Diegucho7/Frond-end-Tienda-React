import React, { Dispatch, SetStateAction } from 'react';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import TreeView from './TreeView';
import StorageDetails from './StorageDetails';

interface SidebarProps {
  setOpenOffcanvas: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ setOpenOffcanvas }: SidebarProps) => {
  return (
    <div className="file-manager-sidebar scrollbar">
      <div className="d-flex flex-between-center">
        <h5 className="mb-2">My Files</h5>
        <Button
          className="p-0 fs-8 d-lg-none"
          onClick={() => setOpenOffcanvas(false)}
        >
          <FontAwesomeIcon icon={faXmark} transform={'up-3'} />
        </Button>
      </div>
      <TreeView />
      <StorageDetails />
    </div>
  );
};

export default Sidebar;
