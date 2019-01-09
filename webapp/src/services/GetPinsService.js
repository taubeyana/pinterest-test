class GetPinsService {
    static getRelevantPins() {
        return fetch('/api/pins')
        .then(res => res.json())
        .then(pins => pins)
        .catch(e => console.log(e))
    }
    static removePin(id) {
        return fetch('/api/pins/' + id, {
            method: 'DELETE'
        }).then(data => data)
        .catch(err => err.message)
    }
}

export default GetPinsService;