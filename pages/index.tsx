import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "lib/Link";

export default function Index() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Typescript, Next.js, Material UI & Styled Components
                    template.
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
            </Box>
        </Container>
    );
}
