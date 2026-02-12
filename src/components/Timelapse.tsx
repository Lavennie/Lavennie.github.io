import { useState } from "react";
import './Timelapse.css'

type TimelapseProps = {
    videoUrl: string;
    thumbnailUrl: string;
};

export default function Timelapse({ videoUrl, thumbnailUrl } : TimelapseProps) {
    const videoIdMatch = videoUrl.match(/v=([a-zA-Z0-9_-]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : '';
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <div className="timelapse-container" onClick={() => setIsPlaying(true)}>
                <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        overflow: "hidden",
                        cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    }}
                >
                    <img
                        src={thumbnailUrl}
                        alt="Video thumbnail"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </a>
            </div>
        </>
    );
}