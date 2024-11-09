// src/components/RichTextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styling

const RichTextEditor = ({ value, onChange }) => {
  return (
    <div>
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={onChange} 
        placeholder="Write something amazing..."
      />
    </div>
  );
};

export default RichTextEditor;
