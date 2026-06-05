// Reduce el tamaño de una imagen antes de guardarla en IndexedDB,
// para que las fotos de progreso no llenen la memoria del teléfono.
export async function compressImage(
  file: File,
  maxSize = 1280,
  quality = 0.82
): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file);
    let { width, height } = bitmap;

    if (width >= height && width > maxSize) {
      height = Math.round((height * maxSize) / width);
      width = maxSize;
    } else if (height > width && height > maxSize) {
      width = Math.round((width * maxSize) / height);
      height = maxSize;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    return await new Promise<Blob>((resolve) => {
      canvas.toBlob(
        (blob) => resolve(blob ?? file),
        'image/jpeg',
        quality
      );
    });
  } catch {
    // Si el navegador no soporta createImageBitmap, guarda el original.
    return file;
  }
}
