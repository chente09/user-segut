import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

// Interfaz para los datos de la imagen
export interface ImageData {
  id?: string;
  url: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private firestore: Firestore, private storage: Storage) {}

  // Método para cargar una imagen a Firebase Storage
  async uploadImage(file: File): Promise<string> {
    const filePath = `images/${file.name}`;
    const fileRef = ref(this.storage, filePath);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef); // Retornar la URL de la imagen
  }

  // Método para guardar la información de la imagen en Firestore
  async saveImageData(imageData: ImageData): Promise<any> {
    const imagesRef = collection(this.firestore, 'images');
    return addDoc(imagesRef, imageData);
  }

  // Obtener todas las imágenes almacenadas en Firestore
  getImages(): Observable<ImageData[]> {
    const imagesRef = collection(this.firestore, 'images');
    return collectionData(imagesRef, { idField: 'id' }) as Observable<ImageData[]>;
  }

  // Método para eliminar la información de la imagen de Firestore
  async deleteImageData(imageId: string): Promise<void> {
    const docRef = doc(this.firestore, `images/${imageId}`);
    await deleteDoc(docRef);
  }
}
