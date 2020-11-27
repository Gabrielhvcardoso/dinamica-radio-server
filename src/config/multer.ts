import * as multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const multerConfig = {
  dest: path.resolve(__dirname, '..', '..', '..', '..', 'www', 'storage', 'radio'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', '..', '..', 'www', 'storage', 'radio'))
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, null)

        const filename = `${hash.toString('hex')}-${file.originalname}`
        cb(null, filename)
      })
    }
  }),
  limits: {
    fileSize: 1 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png'
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type.'))
    }
  }
}

export default multerConfig
