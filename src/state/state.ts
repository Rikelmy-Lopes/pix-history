
export interface IPix {
    title: string,
    message: string,
    createAt: number,
}

interface IState {
    pixs: IPix[]
}

export const state: IState = {
  pixs: [{ title: 'Pix', message: 'Pix de 500 reais', createAt: Date.now()}],
};