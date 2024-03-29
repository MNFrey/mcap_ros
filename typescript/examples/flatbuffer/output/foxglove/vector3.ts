// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * A vector in 3D space that represents a direction only
 */
export class Vector3 {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Vector3 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsVector3(bb:flatbuffers.ByteBuffer, obj?:Vector3):Vector3 {
  return (obj || new Vector3()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsVector3(bb:flatbuffers.ByteBuffer, obj?:Vector3):Vector3 {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Vector3()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * x coordinate length
 */
x():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 1.0;
}

/**
 * y coordinate length
 */
y():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 1.0;
}

/**
 * z coordinate length
 */
z():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 1.0;
}

static startVector3(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addX(builder:flatbuffers.Builder, x:number) {
  builder.addFieldFloat64(0, x, 1.0);
}

static addY(builder:flatbuffers.Builder, y:number) {
  builder.addFieldFloat64(1, y, 1.0);
}

static addZ(builder:flatbuffers.Builder, z:number) {
  builder.addFieldFloat64(2, z, 1.0);
}

static endVector3(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishVector3Buffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedVector3Buffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createVector3(builder:flatbuffers.Builder, x:number, y:number, z:number):flatbuffers.Offset {
  Vector3.startVector3(builder);
  Vector3.addX(builder, x);
  Vector3.addY(builder, y);
  Vector3.addZ(builder, z);
  return Vector3.endVector3(builder);
}
}
