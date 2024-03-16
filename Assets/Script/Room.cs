using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Room
{
    private int locX;
    private int locY;

    private bool active;
    private bool startRoom;
    private bool endRoom;

    private bool doorTop;
    private bool doorBottom;
    private bool doorLeft;
    private bool doorRight;

    public int LocX { get => locX; set => locX = value; }
    public int LocY { get => locY; set => locY = value; }
    public bool DoorTop { get => doorTop; set => doorTop = value; }
    public bool DoorBottom { get => doorBottom; set => doorBottom = value; }
    public bool DoorLeft { get => doorLeft; set => doorLeft = value; }
    public bool DoorRight { get => doorRight; set => doorRight = value; }
    public bool Active { get => active; set => active = value; }
    public bool StartRoom { get => startRoom; set => startRoom = value; }
    public bool EndRoom { get => endRoom; set => endRoom = value; }
}
