import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./style.scss";
import { stateFromHTML } from "draft-js-import-html";
interface Props {
  onChange?: (e: any) => void;
  value?: any;
}

export const EditorComponent = (props: Props) => {
  const { value, onChange } = props;
  const [stateEdit, setStateEdit] = useState(EditorState.createEmpty());
  const [onloadProps, setOnloadProp] = useState(false);
  const onEditorStateChange = (editorState: EditorState) => {
    editorState.getCurrentInlineStyle();
    if (onChange)
      onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setStateEdit(editorState);
  };

  const convertToDraft = () => {
    let contentState = stateFromHTML(value || "");
    return EditorState.createWithContent(contentState);
  };
  useEffect(() => {
    setOnloadProp(false);
  }, []);
  useEffect(() => {
    if (!onloadProps && value) {
      setOnloadProp(true);
      setStateEdit(convertToDraft());
    }
    if (!value) {
      setStateEdit(EditorState.createEmpty());
    }
  }, [value]);
  return (
    <div className="text-editor">
      <label className="label">Mô tả</label>
      <div className="main">
        <Editor
          toolbarHidden
          placeholder="Viết một bài thật hay nào"
          editorState={stateEdit}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};
