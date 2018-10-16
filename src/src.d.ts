import * as CLI from 'cli';
import Library from "./Library";

declare module Package {
    type CLI = typeof CLI;
    type Library = typeof Library;
}