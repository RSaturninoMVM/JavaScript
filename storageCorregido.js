const KEY = "streamflix_db_v1";

export class StreamService {
    guardarCataleg(llistaMultimedia) {
        let cataleg = JSON.stringify(llistaMultimedia);
        localStorage.setItem(KEY, cataleg);
        console.log(`Dades guardades: ${llisaMultimedia.lenght} Items.`);
    }
    carregarCataleg() {
        const catalegJSON = localStorage.getItem(KEY);

        return JSON.parse(catalegJSON);
    }
    esborrarTot() {
        localStorage.removeItem("streamflix_db_v1");
    }
}