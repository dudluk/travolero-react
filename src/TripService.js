class TripService {
    all = [
        {
            id: 1,
            name: "Sri Lanka"
        },
        {
            id: 2,
            name: "New Zealand"
        }
    ];
    getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.all);
            }, 10);
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.all.find(x => x.id == id));
            }, 10);
        });
    }


}

export default new TripService();