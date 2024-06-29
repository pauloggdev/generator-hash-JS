export default interface Hash{
    execute(textHash:string, privateKeyPem:string):string;
}