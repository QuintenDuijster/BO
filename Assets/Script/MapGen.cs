using System.Collections;
using Unity.VisualScripting;
using UnityEditor.Experimental.GraphView;
using UnityEngine;
using UnityEngine.PlayerLoop;

public class MapGen : MonoBehaviour
{
    [SerializeField]
    private GameObject room;

    private int mapHeight = 10;
    private int mapWidth = 10;
    private Room[][] grid;
    private Room[] map;
    private int roomAmount;
    private int startPosX;
    private int startPosY;

    void Start()
    {
        generateGrid();
        randomWalk();
        generateMap();
        loadMap();
    }

    void generateGrid()
    {
        grid = new Room[mapHeight][];

        for (int i = 0; i < mapHeight; i++)
        {
            grid[i] = new Room[mapWidth];
            for (int j = 0; j < mapWidth; j++)
            {
                grid[i][j] = new Room();
            }
        }
    }

    private void randomWalk()
    {
        startPosX = Random.Range(0, mapWidth);
        startPosY = Random.Range(0, mapHeight);
        int posX = startPosX;
        int posY = startPosY;
        int newLocY;
        int newLocX;
        grid[startPosY][startPosX].Active = true;
        grid[startPosY][startPosX].StartRoom = true;

        float randomStep = Random.Range(0, 4);

        for (int i = 0; i < 10; i++)
        {
            if (randomStep == 0)
            {
                newLocY = posY + 1;
                if (newLocY > 9)
                {
                    grid[posY][posX].DoorTop = true;
                    posY--;
                    grid[posY][posX].Active = true;
                    grid[posY][posX].DoorBottom = true;
                }
                else
                {
                    grid[posY][posX].DoorBottom = true;
                    posY++;
                    grid[posY][posX].Active = true;
                    grid[posY][posX].DoorTop = true;
                }
            }
            else if (randomStep == 1)
            {
                newLocY = posY - 1;
                if (newLocY < 0)
                {
                    grid[posY][posX].DoorBottom = true;
                    posY++;
                    grid[posY][posX].Active = true;
                    grid[posY][posX].DoorTop = true;
                }
                else
                {
                    grid[posY][posX].DoorTop = true;
                    posY--;
                    grid[posY][posX].Active = true;
                    grid[posY][posX].DoorBottom = true;
                }
            }
            else if (randomStep == 2)
            {
                newLocX = posX + 1;
                if (newLocX > 9)
                {
                    grid[posY][posX].DoorLeft = true;
                    posX--;
                    grid[posY][posX].Active = true;
                    grid[posY][posX].DoorRight = true;
                }
                else
                {
                    grid[posY][posX].DoorRight = true;
                    posX++;
                    grid[posY][posX].Active = true;
                    grid[posY][posX].DoorLeft = true;
                }
            }
            else if (randomStep == 3)
            {
                newLocX = posX - 1;
                if (newLocX < 0)
                {
                    grid[posY][posX].DoorRight = true;
                    posX++;
                    grid[posY][posX].Active = true;
                    grid[posY][posX].DoorLeft = true;
                }
                else
                {
                    grid[posY][posX].DoorLeft = true;
                    posX--;
                    grid[posY][posX].Active = true;
                    grid[posY][posX].DoorRight = true;
                }
            }
            else
            {
                Debug.Log("Something went rong");
            }
            roomAmount++;
        }
    }

    private void generateMap()
    {
        map = new Room[roomAmount];
        int number = 0;
        for (int i = 0; i < grid.Length; i++)
        {
            for(int j = 0; j < grid[i].Length; j++)
            {
                if (grid[i][j].Active)
                {
                    map[number] = grid[i][j];
                    map[number].LocY = (startPosY - i) * 10; 
                    map[number].LocX = (startPosX - j) * 10;
                    Debug.Log(map[number]);
                    number++;
                }
            }
        }
    }

    private void loadMap()
    {
        for (int i = 0;i < map.Length;i++) 
        {
            Vector3 vector3 = new Vector3(map[i].LocX, 0, map[i].LocY);
            room.transform.position = vector3;
            Instantiate(room);
        }
    }
}
