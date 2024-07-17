import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(req, { params }) {
  const { img } = params;

  const image = img.join('/');

  if (image && image.length) {
    const publicDir = path.join(process.cwd(), 'public');
    const fileUrl = path.join(publicDir, image);

    try {
      const data = fs.readFileSync(fileUrl);
      return new NextResponse(data, { status: 200 });
    } catch (error) {
      return new NextResponse(null, { status: 404 });
    }
  } else {
    return new NextResponse(null, { status: 404 });
  }
}
