export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal(id) {
    return {type: SHOW_MODAL, id: id};
}

export function hideModal() {
    return {type: HIDE_MODAL};
}
