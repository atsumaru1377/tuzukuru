import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Logo from "../../public/logo.svg"
import Image from "next/image"
import Link from "next/link"
export default function AlignItemsList() {
  return (
        <footer style={{marginTop:"32px"}}>
            <Divider></Divider>
                <Box sx={{width:"100%",padding:"32px"}}>
                    <Link href="/">
                        <a>
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"end"}}>
                        <Image src={Logo} alt="logo" />
                        <Divider orientation="vertical" sx={{mx:"16px"}}/>
                        はじめて続く、作るサイクル
                        </Box>
                        </a>
                    </Link>
                </Box>

        </footer>
  );
}
