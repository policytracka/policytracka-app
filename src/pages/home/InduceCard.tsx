import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

type Props = {};
const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});
const card1 = (
  <React.Fragment>
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 250,
        maxWidth: 400,
      }}
    >
      <Box
        sx={{
          color: "text.primary",
          fontSize: 36,
          fontWeight: "Bold",
          textAlign: "left",
        }}
      >
        🤔 นโยบายซ้ำซากจำเจ
      </Box>
      <Box
        sx={{
          color: "text.secondary",
          display: "underline",
          fontSize: 16,
          textAlign: "left",
        }}
      >
        ในทุกๆปี ป้ายโฆษนาและนโยบายหาเสียงเลือกตั้งที่ถูกผลิตออกมา
        ถูกประชาชนเห็น ได้รับการชื่นชม การติเตียน นโยบายที่ดูนำสมัย
        อาจจะเป็นแค่นโยบายที่ถูกพูดถึงมาแล้ว 10 ปี แต่ไม่เคยได้ทำ
        และนโยบายบางอันอาจจะเป็นเรื่องเดิมๆ ที่ถูกเลือกมาแล้วเป็น 10 ปี
        แต่ก็ไม่เคยได้เปลี่ยนแปลงอะไร เป็นนโยบายที่ไม่มีความสร้างสรรค์
      </Box>
    </Box>
  </React.Fragment>
);
const card2 = (
  <React.Fragment>
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        minWidth: 250,
        maxWidth: 420,
      }}
    >
      <Box
        sx={{
          color: "text.primary",
          fontSize: 36,
          fontWeight: "Bold",
          textAlign: "left",
        }}
      >
        😵‍💫 การเข้าถึงที่ลําบาก
      </Box>
      <Box
        sx={{
          color: "text.secondary",
          display: "underline",
          fontSize: 16,
          textAlign: "left",
        }}
      >
        ส่งผลให้พลเมืองอาจตัดสินใจเลือกพรรคเหล่านั้นโดยไม่มี
        ข้อมูลที่เพียงพอต่อการตัดสินใจ โดยที่ไม่มีข้อมูลสนับสนุน
        ถึงความเป็นไปได้ในการดำเนินการที่อาจจะเป็นแค่นโยบายที่ถูกเอามาขาย ในทุก
        ๆ สมัยการเลือกตั้ง และไม่ได้รับการดำเนินการให้สำเร็จอย่างที่ควรจะเป็น
        รวมถึงไม่มีนโยบายใหม่ ๆ ที่สร้างสรรค์ขึ้นเพื่อตอบสนอง
        ความต้องการของประชาชนจริง ๆ
      </Box>
    </Box>
  </React.Fragment>
);
const InduceCard = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="shadow-xl rounded-lg ">{card1}</div>
      <div className="shadow-xl rounded-lg ">{card2}</div>
    </ThemeProvider>
  );
};

export default InduceCard;
