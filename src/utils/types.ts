export interface IJog {
    date: number,
    distance: number,
    id?: number,
    time: number,
    user_id?: string
}

export interface IFilter {
    from: string,
    to: string
}