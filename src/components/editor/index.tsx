import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./style.scss";
interface Props {}

export const EditorComponent = (props: Props) => {
  const [state, setState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState: any) => {
    setState(editorState);
    console.log(editorState);
  };
  const getText = () => {
    return {
      value: draftToHtml(convertToRaw(state.getCurrentContent())),
      text: state,
    };
  };
  return (
    <div className="text-editor">
      <label className="label">Mô tả</label>
      <div className="main">
        <Editor
          toolbarHidden
          placeholder="Viết một bài thật hay nào"
          editorState={state}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};
