# Learm MTPrototo

## General description

The protocol is designed for access to a server API from applications running on mobile devices.
It mast be empasized that a web browser is not suck an application.

The protocol is subdivided into three virtually independent components:

- High-level component (API query language): defines the method whereby API queries and reponses are converted to binary messages.
- Cryptographic (authorization) layer: defines the method by which messages are encrypted prior to being transmitted through the transport protocol.
- Transport component: defines the method for the client and the server to transmit messages over some other existing network protocol.


# mtproto
