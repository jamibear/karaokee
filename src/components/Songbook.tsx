import React, { useEffect, useRef } from "react";

const Songbook = ({ trackList }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const drawSongbook = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Load the logo image
      const logoImg = new Image();
      logoImg.src = "/assets/karaokee.png";
      logoImg.onload = () => {
        // Draw the logo image at the top of the canvas
        ctx.drawImage(logoImg, 60, 6, 160, 39);

        const bannerImg = new Image();
        bannerImg.src = "/assets/top50.png";
        bannerImg.onload = () => {
          // Draw the logo image at the top of the canvas
          ctx.drawImage(bannerImg, 450, 9, 134, 33);

          // Table settings
          const tableX = 30;
          const tableY = 60;
          const cellPadding = 5;
          const columnWidths = [150, 60, 90];
          const rowHeight = 24;

          // Song data
          const songs = [
            { title: "Song 1", code: "001", artist: "Artist 1" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            { title: "Song 2", code: "002", artist: "Artist 2" },
            // Add more songs as needed
          ];

          // Split song data into left and right tables
          const leftSongs = trackList.items.slice(0, 24);
          const rightSongs = trackList.items.slice(24);

          // Draw left table header
          ctx.fillStyle = "#00557A";
          ctx.fillRect(
            tableX,
            tableY,
            columnWidths.reduce((sum, num) => sum + num),
            rowHeight * 2
          );

          ctx.strokeStyle = "#303030";
          ctx.lineWidth = 1;

          // Draw borders for the header
          ctx.beginPath();
          ctx.moveTo(tableX, tableY + rowHeight);
          ctx.lineTo(
            tableX + columnWidths.reduce((sum, num) => sum + num),
            tableY + rowHeight
          );
          ctx.stroke();

          ctx.font = "bold 18px Oswald";
          ctx.fillStyle = "white";
          ctx.fillText("New Songs", tableX + 120, tableY + rowHeight - 6);

          ctx.font = "15px Oswald";
          ctx.fillText(
            "Title",
            tableX + cellPadding,
            tableY + rowHeight * 2 - 6
          );
          ctx.fillText(
            "Code",
            tableX + columnWidths[0] + cellPadding,
            tableY + rowHeight * 2 - 6
          );
          ctx.fillText(
            "Artist",
            tableX + columnWidths[0] + columnWidths[1] + cellPadding,
            tableY + rowHeight * 2 - 6
          );

          // Draw left table rows
          ctx.font = "14px Oswald, Arial, sans-serif";
          ctx.fillStyle = "black";

          leftSongs.forEach((song, index) => {
            const rowX = tableX;
            const rowY = tableY + (index + 3) * rowHeight;

            // Draw cell background
            ctx.fillStyle = "#F3F3F3";
            ctx.fillRect(rowX, rowY - rowHeight, columnWidths[0], rowHeight);
            ctx.fillStyle = "#EEE6FF";
            ctx.fillRect(
              rowX + columnWidths[0],
              rowY - rowHeight,
              columnWidths[1],
              rowHeight
            );
            ctx.fillStyle = "#F3F3F3";
            ctx.fillRect(
              rowX + columnWidths[0] + columnWidths[1],
              rowY - rowHeight,
              columnWidths[2],
              rowHeight
            );

            ctx.fillStyle = "black";
            const textY = rowY - rowHeight / 2 + 6;
            const textX = rowX + 6;
            ctx.fillText(song.name, textX, textY);
            ctx.fillText(song.duration_ms, textX + columnWidths[0], textY);
            ctx.fillText(
              song.artists[0].name,
              textX + columnWidths[0] + columnWidths[1],
              textY
            );

            // Draw cell borders
            ctx.strokeStyle = "#303030";
            ctx.strokeRect(rowX, rowY - rowHeight, columnWidths[0], rowHeight);
            ctx.strokeRect(
              rowX + columnWidths[0],
              rowY - rowHeight,
              columnWidths[1],
              rowHeight
            );
            ctx.strokeRect(
              rowX + columnWidths[0] + columnWidths[1],
              rowY - rowHeight,
              columnWidths[2],
              rowHeight
            );
          });

          // Draw right table header
          const rightTableX =
            tableX + columnWidths[0] + columnWidths[1] + columnWidths[2] + 6;

          // Draw right table rows
          rightSongs.forEach((song, index) => {
            const rowX = rightTableX;
            const rowY = tableY + (index + 1) * rowHeight;

            // Draw cell background
            ctx.fillStyle = "#F3F3F3";
            ctx.fillRect(rowX, rowY - rowHeight, columnWidths[0], rowHeight);
            ctx.fillStyle = "#EEE6FF";
            ctx.fillRect(
              rowX + columnWidths[0],
              rowY - rowHeight,
              columnWidths[1],
              rowHeight
            );
            ctx.fillStyle = "#F3F3F3";
            ctx.fillRect(
              rowX + columnWidths[0] + columnWidths[1],
              rowY - rowHeight,
              columnWidths[2],
              rowHeight
            );

            ctx.fillStyle = "black";
            const textY = rowY - rowHeight / 2 + 6;
            const textX = rowX + 6;
            ctx.fillText(song.name, textX, textY);
            ctx.fillText(song.duration_ms, textX + columnWidths[0], textY);
            ctx.fillText(
              song.artists[0].name,
              textX + columnWidths[0] + columnWidths[1],
              textY
            );

            // Draw cell borders
            ctx.strokeStyle = "#303030";
            ctx.strokeRect(rowX, rowY - rowHeight, columnWidths[0], rowHeight);
            ctx.strokeRect(
              rowX + columnWidths[0],
              rowY - rowHeight,
              columnWidths[1],
              rowHeight
            );
            ctx.strokeRect(
              rowX + columnWidths[0] + columnWidths[1],
              rowY - rowHeight,
              columnWidths[2],
              rowHeight
            );
          });
        };
      };
    };

    drawSongbook();
  }, []);

  return <canvas ref={canvasRef} width={800} height={800} />;
};

export default Songbook;
