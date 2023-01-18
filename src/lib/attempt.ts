export default async function attempt<T, E extends Error>(p: Promise<T>): Promise<[E|undefined, T]> {

    try {

        const result = await p;

        return [undefined, result as T];

    } catch (e) {

        return [e as E, {} as T];

    }

}
