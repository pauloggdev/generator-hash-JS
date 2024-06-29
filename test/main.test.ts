import CreateHash from "../src/CreateHash";
test("Deve criar um hash", function () {
    const textHash = "2024-06-29;2024-06-29T16:53:59;FR 2024/1;200.00;";
    const privateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDWCvQ3GM1IPRC7cQlwdYHTbmqiOBklVzAciKSM+ph7Cg5leg6p
rgogxXlR8HR7LEzGKjNuYV5paamHvoKcpg4I9RHY8tMgBWgr4xKu3mI0rIlqxwqH
Br28+JObzQ8HK+HLytPMJaYVAYF2jZKllXlzPWuICMYXgy/+RhJgwHK7BQIDAQAB
-----END RSA PRIVATE KEY-----`;

    const createHash = new CreateHash();
    const output = createHash.execute(textHash, privateKeyPem)
    expect(output).toBe("hIo19xaMAjXeVlm3VaTCZsB3LhIjU1qmIjJ8VxB5Ink0L0KPUAp5R+j4xGsCvsID/Q230RB4KJcNeQpK6wZk5iNXSwOSvu3fX8K/b8uhqzrfuVKenfbWIQbVvLUyw0tfqK4GMcusff3dwesuMfWtYvZqAAsiiYPomwwajVhy6Og=")
})