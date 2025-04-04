export class Hero {
  name: string;
  category: string;
  private _abilities: string[];
  private _currentImage: string;
  private _imageVariants: { [key: string]: string };
  primaryColor: string;
  secondaryColor: string;
  basePower: string;

  constructor(
    name: string,
    category: string,
    abilities: string[],
    baseImage: string,
    imageVariants: { [key: string]: string } = {},
    primaryColor: string = 'gray',
    secondaryColor: string = 'black',
    basePower: string = 'Normal'
  ) {
    this.name = name;
    this.category = category;
    this._abilities = abilities;
    this._currentImage = baseImage;
    this._imageVariants = imageVariants;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.basePower = basePower;
  }

  get abilities(): string[] {
    return this._abilities;
  }

  get currentImage(): string {
    return this._currentImage;
  }

  set currentImage(value: string) {
    this._currentImage = value;
  }

  get imageVariants(): { [key: string]: string } {
    return this._imageVariants;
  }

  set imageVariants(value: { [key: string]: string }) {
    this._imageVariants = value;
  }
}