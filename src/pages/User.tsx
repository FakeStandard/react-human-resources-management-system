import Page from "../components/Page";
import { Container, Grid, Typography } from '@mui/material';

export default function User() {

    return (
        <Page>
            <Container maxWidth='xl'>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    User
                </Typography>
                <Grid>

                </Grid>
            </Container>
        </Page>
    )
}