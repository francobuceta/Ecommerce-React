let productos = true;

export const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productos) {
                resolve(task);
            } else {
                reject("Lo sentimos, ha ocurrido un error al cargar los productos");
            }
        }, time)
    })
}