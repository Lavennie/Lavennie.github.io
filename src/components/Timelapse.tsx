import './Timelapse.css'

type TimelapseProps = {
    videoUrl: string;
    thumbnailUrl: string;
};

export default function Timelapse({ videoUrl, thumbnailUrl } : TimelapseProps) {
    return (
        <>
            <div className="timelapse-container">
                <a
                    href={thumbnailUrl}
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
                    }}>
                    {/* Thumbnail */}
                    <img
                        src={thumbnailUrl}
                        alt="Video thumbnail"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </a>
            </div>
            {/* Overlay button */}
            <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="timelapse-play"
                onClick={(e) => e.stopPropagation()} // prevent container click
            >
                Time-lapse
            </a>
        </>
    );
}