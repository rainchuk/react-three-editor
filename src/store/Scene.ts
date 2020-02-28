import { createContext } from "react";
import { observable, action, computed, toJS } from "mobx";

import { ObjectType } from "../types/types";
import { ObjectModificationModes, ObjectTypes } from "../types/enums";
import { SphereObject } from "../types/interfaces";

class Scene {
  @observable private objects: ObjectType[] = [];
  @observable private selectedId: number = -1;
  @observable private selectedIds: [number, number] = [-1, -1];
  @observable private objectModificationMode: ObjectModificationModes =
    ObjectModificationModes.scale;

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
   * Returns modification mode
   */
  @computed public get getModificationMode() {
    return this.objectModificationMode;
  }

  @computed public get getSelectedObjectValues() {
    return toJS(this.objects[this.selectedId]);
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

  /**
   * Resets selected objects
   */
  @action public resetSelectedObjects() {
    this.selectedIds = [-1, -1];
  }

  /**
   * Sets object new name
   *
   * @param index - object index
   * @param name - object new name
   */
  @action public renameObject(index: number, name: string) {
    this.objects[index].name = name;
  }

  /**
   * Sets modification mode
   *
   * @param mode - object modification mode
   */
  @action public changeModificationMode(mode: ObjectModificationModes) {
    this.objectModificationMode = mode;
  }

  /**
   * Changes radius
   *
   * @param radius - new radius
   */
  @action public changeRadius(radius: number) {
    // console.log(this.selectedId);
    (this.objects[this.selectedId] as SphereObject).radius = radius;
  }

  /**
   * Changes object rotation
   *
   * @param rotation - new rotation
   */
  @action public changeRotation(rotation: ObjectType["rotation"]) {
    this.objects[this.selectedId].rotation = rotation;
  }

  /**
   * Changes object position
   *
   * @param position - new position
   */
  @action public changePosition(position: ObjectType["position"]) {
    console.log(position);
    this.objects[this.selectedId].position = position;
  }
}

export const SceneStore = createContext(new Scene());
