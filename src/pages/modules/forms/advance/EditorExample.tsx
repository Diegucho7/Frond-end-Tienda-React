import PhoenixDocCard from 'components/base/PhoenixDocCard';
import TinymceEditor from 'components/base/TinymceEditor';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';

const editorCode = `
import TinymceEditor from 'components/base/TinymceEditor';

function EditorExample(){
  return(
    <TinymceEditor
      options={{
        height: '20rem'
      }}
    />
  )
}
`;

const EditorExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Editor"
        description={`${
          import.meta.env.VITE_TITLE
        }-React uses Tinymce React for rich text editor. TinyMCE React component integrates TinyMCE into React projects.`}
        link={{
          text: 'Documentation for React Tinymce',
          url: 'https://github.com/tinymce/tinymce-react'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header noPreview title="Self Hosted ">
            <p className="mt-2 mb-0">
              Please note that we have used{' '}
              <a
                href="https://www.tiny.cloud/docs/tinymce/latest/react-pm-host/"
                target="_blank"
                rel="noreferrer"
              >
                self hosted
              </a>{' '}
              <code>tinymce</code> in our Phoenix project. To do this we have
              added <code>tinymce</code> package in our public directory. Then
              added <code>tinymceScriptSrc="/tinymce/tinymce.min.js"</code> and{' '}
              <code>license_key: 'gpl'</code> in tinymce editor. If you use{' '}
              <a
                href="https://www.tiny.cloud/auth/signup/"
                target="_blank"
                rel="noreferrer"
              >
                Tiny Cloud
              </a>{' '}
              remove <code>tinymceScriptSrc</code> and <code>license_key</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor
              code={`
                <Editor 
                    tinymceScriptSrc="/tinymce/tinymce.min.js" // remove tinymceScriptSrc if you use tiny cloud
                    init={{
                      ....
                      license_key: 'gpl', // remove license_key if you use tiny cloud
                    }}
                />
                
              `}
            />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header noPreview title="Tiny Cloud Pre Requirement">
            <p className="mt-2 mb-2">
              To use Tinymce editor at first you need to sign up in{' '}
              <a
                href="https://www.tiny.cloud/auth/signup/"
                target="_blank"
                rel="noreferrer"
              >
                Tiny Cloud
              </a>
              . And collect your api key and paste it in the .env file variable
              <code> VITE_TINYMCE_APIKEY</code>. Then add the apiKey in editor.
            </p>

            <PhoenixLiveEditor
              code={`VITE_TINYMCE_APIKEY= your_api_key_here`}
            />
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor
              code={`
              <Editor 
                . . .
                apiKey={import.meta.env.VITE_TINYMCE_APIKEY} // your tinymce api key
              />
                
              `}
            />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={editorCode} scope={{ TinymceEditor }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default EditorExample;
