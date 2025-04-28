import { ImgHTMLAttributes, useEffect, useState } from 'react'

export type ImgProps = ImgHTMLAttributes<HTMLImageElement>

export const Img = ({ src, ...props }: ImgProps) => {
  const [localSrc, setLocalSrc] = useState<string>('')

  useEffect(() => {
    setLocalSrc(src)
  }, [src])

  return <img src={localSrc} {...props} />
}