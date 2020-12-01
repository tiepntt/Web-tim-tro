import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
    <div>
      <Editor
        editorState={state}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};
