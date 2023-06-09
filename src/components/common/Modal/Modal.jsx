import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Modal.scss";

const ModalComponent = ({ modalOpen, setModalOpen, setStatus, status ,sendStatus}) => {
  return (
    <div className="modal-comp">
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
            onClick={sendStatus}
          >
            Post
          </Button>,
        ]}
      >
        <hr />
        <input
          type="text"
          placeholder="What do you want to talk about?"
          className="modal-input"
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        />
      </Modal>
    </div>
  );
};

export default ModalComponent;
