import {
  getExtension,
  isSupportedPreviewDocumentType,
} from '@/utils/document-util';
import React from 'react';

interface IProps extends React.PropsWithChildren {
  link?: string;
  preventDefault?: boolean;
  color?: string;
  documentName: string;
  documentId?: string;
  prefix?: string;
}

const NewDocumentLink = ({
  children,
  link,
  preventDefault = false,
  color = 'rgb(15, 79, 170)',
  documentId,
  documentName,
  prefix = 'file',
}: IProps) => {
  let nextLink = link;
  const extension = getExtension(documentName);
  if (!link) {
    nextLink = `/knowledge/document/${documentId}?ext=${extension}&prefix=${prefix}`;
  }

  return (
    <a
      target="_blank"
      onClick={
        !preventDefault || isSupportedPreviewDocumentType(extension)
          ? undefined
          : (e) => e.preventDefault()
      }
      href={nextLink}
      rel="noreferrer"
      style={{ color, wordBreak: 'break-all' }}
    >
      {children}
    </a>
  );
};

export default NewDocumentLink;
