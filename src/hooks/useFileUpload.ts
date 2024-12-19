import { useState, useCallback } from 'react';
import { validateFileSize, validateFileType } from '../utils/validation';
import { FILE_UPLOAD_CONFIG } from '../config/constants';

interface UseFileUploadProps {
  maxFiles?: number;
  maxSizeMB?: number;
  allowedTypes?: string[];
}

export const useFileUpload = ({
  maxFiles = FILE_UPLOAD_CONFIG.maxFiles,
  maxSizeMB = FILE_UPLOAD_CONFIG.maxSizeMB,
  allowedTypes = FILE_UPLOAD_CONFIG.allowedTypes
}: UseFileUploadProps = {}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const validateFile = useCallback((file: File): string | null => {
    if (!validateFileSize(file, maxSizeMB)) {
      return `File ${file.name} exceeds maximum size of ${maxSizeMB}MB`;
    }
    if (!validateFileType(file, allowedTypes)) {
      return `File ${file.name} has an unsupported format`;
    }
    return null;
  }, [maxSizeMB, allowedTypes]);

  const handleFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    const newErrors: string[] = [];
    const validFiles: File[] = [];

    fileArray.forEach(file => {
      const error = validateFile(file);
      if (error) {
        newErrors.push(error);
      } else {
        validFiles.push(file);
      }
    });

    if (files.length + validFiles.length > maxFiles) {
      newErrors.push(`Maximum ${maxFiles} files allowed`);
      return;
    }

    setErrors(newErrors);
    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
    }
  }, [files, maxFiles, validateFile]);

  const removeFile = useCallback((index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  return {
    files,
    errors,
    handleFiles,
    removeFile
  };
};