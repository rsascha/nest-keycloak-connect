
{
  "realm": "master",
  "auth-server-url": "http://localhost:8080/auth/",
  "ssl-required": "external",
  "resource": "test",
  "verify-token-audience": true,
  "credentials": {
    "secret": "8ea867dd-2df2-4755-9c7f-49570e2e5b19"
  },
  "use-resource-role-mappings": true,
  "confidential-port": 0
}

curl -k --data "grant_type=client_credentials&client_id=test&client_secret=8ea867dd-2df2-4755-9c7f-49570e2e5b19" http://localhost:8080/auth/realms/master/protocol/openid-connect/token
