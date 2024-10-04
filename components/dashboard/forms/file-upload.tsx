import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FilePondFile, FilePondInitialFile } from "filepond"
import { FilePond, registerPlugin } from "react-filepond"

import "filepond/dist/filepond.min.css"

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

import { DataTable } from "@components/data-table/data-table"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"

import { Card } from "@/components/ui/card"
import Dropzone from "@/components/ui/dropzone"
import Filepond from "@/components/file-upload"

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

interface FileData {
  name: string
  size: string
  type: string
  url?: string
  thumbnail?: string
}

interface UploadFileProps {
  bookingId?: string
}

const UploadFile: React.FC<UploadFileProps> = ({ bookingId }) => {
  const [files, setFiles] = useState<FileData[]>([])

  useEffect(() => {
    // Fetch the image URLs from the API
    const fetchImageUrls = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL?.replace("/api/v1", "") || ""
        const response = await fetch(`${baseUrl}/api/latest-image/${bookingId}`)
        const data = await response.json()
        const fileArray = Array.isArray(data) ? data : [data]

        const updatedFiles = fileArray.map((file: any) => ({
          name: file.filename,
          size: (file.size / 1024).toFixed(2),
          type: file.type,
          url: file.fileURL,
          thumbnail: file.thumbURL,
        }))
        setFiles(updatedFiles)
      } catch (error) {
        console.error("Error fetching image URLs:", error)
      }
    }

    if (bookingId) {
      fetchImageUrls()
    }
  }, [bookingId])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files

    if (fileList) {
      const updatedFiles = Array.from(fileList).map((file) => ({
        name: file.name,
        size: (file.size / 1024).toFixed(2),
        type: file.type,
      }))

      setFiles(updatedFiles)
    }
  }

  // const handleFileUpdate = (fileItems: FilePondFile[]) => {
  //   setFiles(fileItems.map(fileItem => fileItem.file))
  //   setTableFiles(fileItems.map(fileItem => ({
  //     name: fileItem.file.name,
  //     size: (fileItem.file.size / 1024).toFixed(2), // Size in KB
  //     type: fileItem.file.type,
  //   })));
  // };

  const columns = [
    {
      accessorKey: "name",
      header: "File Name",
    },
    {
      accessorKey: "url",
      header: "Preview",
      cell: ({ row }: any) => (
        <a href={row.original.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={row.original.thumbnail}
            alt={row.original.name}
            width={100}
            height={100}
          />
        </a>
      ),
    },
  ]

  return (
    <div className="upload-file-container animate-fade-left">
      <style jsx>{`
        .upload-file-container {
          display: flex;
          flex-direction: column;
          padding: 0rem;
          // background-color: #1f1f1f;
          color: #1f1f1f;
        }

        .upload-file-header {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #e2e8f0;
        }
      `}</style>
      <div className="animate-fade-left">
        <Card className="grid grid-cols-1 gap-x-3 p-4">
          <div className="grid grid-cols-1 gap-x-3 gap-y-2">
            <Dropzone />
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              multiple // Allow multiple file selection
            />
          </div>
        </Card>
        <Card className="border-none p-4">
          <DataTable<FileData, string>
            columns={columns}
            data={files}
            hidePagination={true}
            hideToolbar
            className="custom-scrollbar max-h-44 max-w-[814px] overflow-y-auto border-none xl:max-h-80 [&_td]:px-3 [&_td]:py-1 [&_td]:text-muted-foreground [&_th]:px-3 [&_th]:py-2 [&_th]:text-foreground"
          />
        </Card>
      </div>
    </div>
  )
}

export default UploadFile
