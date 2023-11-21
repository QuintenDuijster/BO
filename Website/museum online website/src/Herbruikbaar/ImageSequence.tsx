import React, { useEffect, useRef } from 'react';


const ImageLoader: React.FC = () =>
{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const images: string[] = [
        'Images/imageLoop/1.png',
        'Images/imageLoop/2.png',
        'Images/imageLoop/3.png',
        'Images/imageLoop/4.png'
    ];
    let currentImageIndex: number = 0;

    useEffect(() =>
    {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (canvas && ctx)
        {
            const img = new Image();
            img.src = images[currentImageIndex];

            img.onload = () =>
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                if (currentImageIndex < 3)
                {
                    currentImageIndex++;
                } else
                {
                    currentImageIndex = 1;
                }

                if (currentImageIndex < images.length)
                {
                    setTimeout(() =>
                    {
                        img.src = images[currentImageIndex];
                    }, 4000); // Change image every 1000ms (1 second)
                }
            };
        }
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={600} height={450} />
        </div>
    );
};

export default ImageLoader;