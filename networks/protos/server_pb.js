// source: protos/server.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var protos_player_pb = require('../protos/player_pb.js');
goog.object.extend(proto, protos_player_pb);
var protos_map_pb = require('../protos/map_pb.js');
goog.object.extend(proto, protos_map_pb);
var protos_reward_pb = require('../protos/reward_pb.js');
goog.object.extend(proto, protos_reward_pb);
goog.exportSymbol('proto.JoinAndLeaveRoom', null, global);
goog.exportSymbol('proto.ReceiveMessage', null, global);
goog.exportSymbol('proto.RoomObject', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RoomObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RoomObject.repeatedFields_, null);
};
goog.inherits(proto.RoomObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RoomObject.displayName = 'proto.RoomObject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReceiveMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReceiveMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ReceiveMessage.displayName = 'proto.ReceiveMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoinAndLeaveRoom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoinAndLeaveRoom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoinAndLeaveRoom.displayName = 'proto.JoinAndLeaveRoom';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RoomObject.repeatedFields_ = [5,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RoomObject.prototype.toObject = function(opt_includeInstance) {
  return proto.RoomObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RoomObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    num: jspb.Message.getFieldWithDefault(msg, 2, 0),
    datetime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    host: jspb.Message.getFieldWithDefault(msg, 4, 0),
    playersList: jspb.Message.toObjectList(msg.getPlayersList(),
    protos_player_pb.Player.toObject, includeInstance),
    map: (f = msg.getMap()) && protos_map_pb.Map.toObject(includeInstance, f),
    rewardsList: jspb.Message.toObjectList(msg.getRewardsList(),
    protos_reward_pb.Reward.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RoomObject}
 */
proto.RoomObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RoomObject;
  return proto.RoomObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RoomObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RoomObject}
 */
proto.RoomObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatetime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHost(value);
      break;
    case 5:
      var value = new protos_player_pb.Player;
      reader.readMessage(value,protos_player_pb.Player.deserializeBinaryFromReader);
      msg.addPlayers(value);
      break;
    case 6:
      var value = new protos_map_pb.Map;
      reader.readMessage(value,protos_map_pb.Map.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 7:
      var value = new protos_reward_pb.Reward;
      reader.readMessage(value,protos_reward_pb.Reward.deserializeBinaryFromReader);
      msg.addRewards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RoomObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RoomObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RoomObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDatetime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHost();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPlayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      protos_player_pb.Player.serializeBinaryToWriter
    );
  }
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      protos_map_pb.Map.serializeBinaryToWriter
    );
  }
  f = message.getRewardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      protos_reward_pb.Reward.serializeBinaryToWriter
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.RoomObject.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RoomObject} returns this
 */
proto.RoomObject.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 num = 2;
 * @return {number}
 */
proto.RoomObject.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RoomObject} returns this
 */
proto.RoomObject.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string dateTime = 3;
 * @return {string}
 */
proto.RoomObject.prototype.getDatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.RoomObject} returns this
 */
proto.RoomObject.prototype.setDatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 host = 4;
 * @return {number}
 */
proto.RoomObject.prototype.getHost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RoomObject} returns this
 */
proto.RoomObject.prototype.setHost = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Player players = 5;
 * @return {!Array<!proto.Player>}
 */
proto.RoomObject.prototype.getPlayersList = function() {
  return /** @type{!Array<!proto.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, protos_player_pb.Player, 5));
};


/**
 * @param {!Array<!proto.Player>} value
 * @return {!proto.RoomObject} returns this
*/
proto.RoomObject.prototype.setPlayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Player}
 */
proto.RoomObject.prototype.addPlayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomObject} returns this
 */
proto.RoomObject.prototype.clearPlayersList = function() {
  return this.setPlayersList([]);
};


/**
 * optional Map map = 6;
 * @return {?proto.Map}
 */
proto.RoomObject.prototype.getMap = function() {
  return /** @type{?proto.Map} */ (
    jspb.Message.getWrapperField(this, protos_map_pb.Map, 6));
};


/**
 * @param {?proto.Map|undefined} value
 * @return {!proto.RoomObject} returns this
*/
proto.RoomObject.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RoomObject} returns this
 */
proto.RoomObject.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RoomObject.prototype.hasMap = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Reward rewards = 7;
 * @return {!Array<!proto.Reward>}
 */
proto.RoomObject.prototype.getRewardsList = function() {
  return /** @type{!Array<!proto.Reward>} */ (
    jspb.Message.getRepeatedWrapperField(this, protos_reward_pb.Reward, 7));
};


/**
 * @param {!Array<!proto.Reward>} value
 * @return {!proto.RoomObject} returns this
*/
proto.RoomObject.prototype.setRewardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.Reward=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Reward}
 */
proto.RoomObject.prototype.addRewards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.Reward, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomObject} returns this
 */
proto.RoomObject.prototype.clearRewardsList = function() {
  return this.setRewardsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReceiveMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ReceiveMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReceiveMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReceiveMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: (f = msg.getPlayer()) && protos_player_pb.Player.toObject(includeInstance, f),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReceiveMessage}
 */
proto.ReceiveMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReceiveMessage;
  return proto.ReceiveMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReceiveMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReceiveMessage}
 */
proto.ReceiveMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new protos_player_pb.Player;
      reader.readMessage(value,protos_player_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReceiveMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReceiveMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReceiveMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReceiveMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      protos_player_pb.Player.serializeBinaryToWriter
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.Player}
 */
proto.ReceiveMessage.prototype.getPlayer = function() {
  return /** @type{?proto.Player} */ (
    jspb.Message.getWrapperField(this, protos_player_pb.Player, 1));
};


/**
 * @param {?proto.Player|undefined} value
 * @return {!proto.ReceiveMessage} returns this
*/
proto.ReceiveMessage.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ReceiveMessage} returns this
 */
proto.ReceiveMessage.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ReceiveMessage.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.ReceiveMessage.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ReceiveMessage} returns this
 */
proto.ReceiveMessage.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoinAndLeaveRoom.prototype.toObject = function(opt_includeInstance) {
  return proto.JoinAndLeaveRoom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoinAndLeaveRoom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinAndLeaveRoom.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: (f = msg.getPlayer()) && protos_player_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoinAndLeaveRoom}
 */
proto.JoinAndLeaveRoom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoinAndLeaveRoom;
  return proto.JoinAndLeaveRoom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoinAndLeaveRoom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoinAndLeaveRoom}
 */
proto.JoinAndLeaveRoom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new protos_player_pb.Player;
      reader.readMessage(value,protos_player_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoinAndLeaveRoom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoinAndLeaveRoom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoinAndLeaveRoom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinAndLeaveRoom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      protos_player_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.Player}
 */
proto.JoinAndLeaveRoom.prototype.getPlayer = function() {
  return /** @type{?proto.Player} */ (
    jspb.Message.getWrapperField(this, protos_player_pb.Player, 1));
};


/**
 * @param {?proto.Player|undefined} value
 * @return {!proto.JoinAndLeaveRoom} returns this
*/
proto.JoinAndLeaveRoom.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoinAndLeaveRoom} returns this
 */
proto.JoinAndLeaveRoom.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoinAndLeaveRoom.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto);
