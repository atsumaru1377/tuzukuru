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
                        <img src="logo.svg" alt="logo" />
                        <Divider orientation="vertical" sx={{mx:"16px"}}/>
                        続くを作る。
                        </Box>
                        </a>
                    </Link>
                </Box>

        </footer>
  );
}
