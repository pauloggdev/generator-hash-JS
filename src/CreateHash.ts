import forge from 'node-forge';
import Hash from './Hash';

export default class CreateHash implements Hash {
    execute(textHash: string, privateKeyPem: string) {
        // Carregar a chave privada.pem
        const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
        // Criar um hash SHA-1 da mensagem
        const md = forge.md.sha1.create();
        md.update(textHash, 'utf8');
        // Assinar digitalmente o hash com a chave privada
        const signature = privateKey.sign(md);
        // Converter a assinatura para Base64
        const signatureBase64 = forge.util.encode64(signature);
        return signatureBase64;
    }
}