
export interface EmailTemplateProps {
  url:string,
  email:string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  url,email
}) => (
  <div>
    <h1>Welcome! {email} </h1>
    <a href={url}> your url {url}</a>
  </div>
);