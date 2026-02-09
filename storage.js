class StreamService {
    guardarCataleg(llistaMultimedia) {
        localStorage.setItem("Nombre", "Frozen");
    }

    carregarCataleg(llistaMultimedia) {
        return llistaMultimedia
    }

    esborrarTot() {
        removeEventListener = streamflix_db_v1 => {
            try {
                localStorage.removeItem(streamflix_db_v1);
            }
            catch (e) {
                console.log("removeStorage: Error removing streamflix_db_v1 [" + streamflix_db_v1 + "] from localStorage: " + JSON.stringify(e));
                return false;
            }
            return true;
        };
    }
}