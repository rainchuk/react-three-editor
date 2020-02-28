import { createContext } from "react";
import { observable, action, computed } from "mobx";

import { Object, TempObject } from "../types/interfaces";
import { ObjectType } from "../types/types";

class Scene {
  @observable private objects: ObjectType[] = [];
  @observable private selectedId: number = -1;
  @observable private selectedIds: [number, number] = [-1, -1];

  /**
   * Getting objects
   *
   * @returns meshes
   */
  @computed public get getObjects() {
    return this.objects;
  }

  /**
   * Getting selected id
   *
   * @returns selected object id
   */
  @computed public get getSelectedId() {
    return this.selectedId;
  }

  /**
   * Getting selected ids
   *
   * @returns selected objects id
   */
  @computed public get getSelectedIds() {
    return this.selectedIds;
  }

  /**
   * Adding object
   *
   * @param object - 3D model
   */
  @action public addObject(object: ObjectType) {
    this.objects = [...this.objects, object];
  }

  /**
   * Removing object
   *
   * @param id - object id
   */
  @action public removeObject(id: number) {
    const temp = [...this.objects];
    temp.splice(id, 1);
    this.objects = temp;
  }

  /**
   * Setting selected id
   *
   * @param id - object id
   */
  @action public selectObject(id: number) {
    this.selectedId = id;
  }

  /**
   * Setting selected ids
   *
   * @param id - second object id
   */
  @action public selectObjects(id: number) {
    this.selectedIds = [this.selectedId, id];
  }

  @action public resetSelectedObjects() {
    this.selectedIds = [-1, -1];
  }
}

export const SceneStore = createContext(new Scene());
