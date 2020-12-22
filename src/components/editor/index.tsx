import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./style.scss";
import { stateFromHTML } from "draft-js-import-html";
interface Props {
  onChange?: (e: any) => void;
  value?: any;
}

export const EditorComponent = (props: Props) => {
  const { value, onChange } = props;
  const onEditorStateChange = (editorState: any) => {
    if (onChange)
      onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  const convertToDraft = () => {
    let contentState = stateFromHTML(value || "");
    return EditorState.createWithContent(contentState);
  };
  return (
    <div className="text-editor">
      <label className="label">Mô tả</label>
      <div className="main">
        <Editor
          toolbarHidden
          placeholder="Viết một bài thật hay nào"
          editorState={convertToDraft()}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};
