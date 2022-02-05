import { Button } from "@mui/material";
import { Book } from "../shared/components/Book/Book";

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Button variant="contained" color="secondary" />
        </div>
    );
}