from pathlib import Path
import win32com.client

output = Path.cwd() /"Salida"
output.mkdir(parents=True, exist_ok=True)
outlook = win32com.client.Dispatch("Outlook.Aplication")\
    .GetNamespace("MAPI")
store =outlook.Stores("alex66692@hotmail.com")
inbox = store.GetDefaultFolder(6)
messages = inbox.Items.Restri