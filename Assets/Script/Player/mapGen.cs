using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UnityEngine;

class Room
{
	internal GameObject roomObject { get; set; }
	internal GameObject doorNorth { get; set; }
	internal GameObject doorEast { get; set; }
	internal GameObject doorSouth { get; set; } 
	internal GameObject doorWest { get; set; }

	public Room(GameObject roomObject)
	{
		this.roomObject = roomObject;
	}
}

public class mapGen : MonoBehaviour
{
	[SerializeField] private GameObject[] environments = new GameObject[5];
	[SerializeField] private GameObject door;
	[SerializeField] private GameObject noDoor;
	[SerializeField] private int steps;
	private GameObject beginArea;
	private Room[] path;

	void Start()
	{
		path = new Room[steps];
		generateMap();
	}

	private void generateMap()
	{
		System.Random random = new System.Random();

		int index = 0;
		int step = 20;
		bool areaToBuild = false;

		Vector3 AreaLocation = beginArea.transform.position;
		Vector3 newAreaLocation = beginArea.transform.position;

		for (int i = 0; i < steps; i++)
		{
			if (areaToBuild)
			{
				int randomStep = random.Next(0, 3);

				if (randomStep == 0)
				{
					newAreaLocation = new Vector3(AreaLocation.x + step, AreaLocation.y, AreaLocation.z);
					if (IsThereAArea(newAreaLocation))
					{
						newAreaLocation = new Vector3(AreaLocation.x - step, AreaLocation.y, AreaLocation.z);
						if (IsThereAArea(newAreaLocation))
						{
							newAreaLocation = new Vector3(AreaLocation.x, AreaLocation.y, AreaLocation.z + step);
							if (IsThereAArea(newAreaLocation))
							{
								newAreaLocation = new Vector3(AreaLocation.x, AreaLocation.y, AreaLocation.z - step);
							}
							else
							{
								areaToBuild = false;
							}
						}
					}
				}
				else if (randomStep == 1)
				{
					newAreaLocation = new Vector3(AreaLocation.x - step, AreaLocation.y, AreaLocation.z);
					if (IsThereAArea(newAreaLocation))
					{
						newAreaLocation = new Vector3(AreaLocation.x + step, AreaLocation.y, AreaLocation.z);
						if (IsThereAArea(newAreaLocation))
						{
							newAreaLocation = new Vector3(AreaLocation.x, AreaLocation.y, AreaLocation.z + step);
							if (IsThereAArea(newAreaLocation))
							{
								newAreaLocation = new Vector3(AreaLocation.x, AreaLocation.y, AreaLocation.z - step);
							}
							else
							{
								areaToBuild = false;
							}
						}
					}
				}
				else if (randomStep == 2)
				{
					newAreaLocation = new Vector3(AreaLocation.x, AreaLocation.y, AreaLocation.z + step);
					if (IsThereAArea(newAreaLocation))
					{
						newAreaLocation = new Vector3(AreaLocation.x, AreaLocation.y, AreaLocation.z - step);
						if (IsThereAArea(newAreaLocation))
						{
							newAreaLocation = new Vector3(AreaLocation.x + step, AreaLocation.y, AreaLocation.z);
							if (IsThereAArea(newAreaLocation))
							{
								newAreaLocation = new Vector3(AreaLocation.x - step, AreaLocation.y, AreaLocation.z);
							}else
							{
								areaToBuild = false;
							}
						}
					}
				}
				else if (randomStep == 3)
				{
					newAreaLocation = new Vector3(AreaLocation.x, AreaLocation.y, AreaLocation.z - step);
					if (IsThereAArea(newAreaLocation))
					{
						newAreaLocation = new Vector3(AreaLocation.x, AreaLocation.y, AreaLocation.z + step);
						if (IsThereAArea(newAreaLocation))
						{
							newAreaLocation = new Vector3(AreaLocation.x + step, AreaLocation.y, AreaLocation.z);
							if (IsThereAArea(newAreaLocation))
							{
								newAreaLocation = new Vector3(AreaLocation.x - step, AreaLocation.y, AreaLocation.z);
							}
							else
							{
								areaToBuild = false;
							}
						}
					}
				}

				GameObject newRoom = Instantiate(environments[index], newAreaLocation, Quaternion.identity);
				path[i] = new Room(newRoom); 

				index++;
			}
		}

		GenerateDoors();
	}

	private void GenerateDoors()
	{
		Vector3 doorPosition;
		Quaternion doorRotation;

		GameObject newDoorNorth;
		GameObject newDoorSouth;
		GameObject newDoorEast;
		GameObject newDoorWest;

		foreach (Room go in path)
		{
			foreach (Room go2 in path)
			{
				Vector3 go2Position = go2.roomObject.transform.position;
				Vector3 goPosition = go.roomObject.transform.position;

				if (goPosition.x + 10 == go2Position.x)
				{
					newDoorNorth = Instantiate(door);
					doorPosition = new Vector3(20, 0, 0);
					doorRotation = Quaternion.Euler(0, 0, 0);
					newDoorNorth.transform.position = doorPosition;
					newDoorNorth.transform.rotation = doorRotation;
				}
				else
				{
					newDoorNorth = Instantiate(noDoor);
					doorPosition = new Vector3(20, 0, 0);
					doorRotation = Quaternion.Euler(0, 0, 0);
					newDoorNorth.transform.position = doorPosition;
					newDoorNorth.transform.rotation = doorRotation;
				}
				if (goPosition.x - 10 == go2Position.x)
				{
					newDoorSouth = Instantiate(noDoor);
					doorPosition = new Vector3(-20, 0, 0);
					doorRotation = Quaternion.Euler(0, 0, 0);
					newDoorSouth.transform.position = doorPosition;
					newDoorSouth.transform.rotation = doorRotation;
				}
				else
				{
					 newDoorSouth = Instantiate(noDoor);
					doorPosition = new Vector3(-20, 0, 0);
					doorRotation = Quaternion.Euler(0, 0, 0);
					newDoorSouth.transform.position = doorPosition;
					newDoorSouth.transform.rotation = doorRotation;
				}
				if (goPosition.y + 10 == go2Position.y)
				{
					newDoorEast = Instantiate(noDoor);
					doorPosition = new Vector3(0, 0, 20);
					doorRotation = Quaternion.Euler(0, 0, 0);
					newDoorEast.transform.position = doorPosition;
					newDoorEast.transform.rotation = doorRotation;
				}
				else
				{
					newDoorEast = Instantiate(noDoor);
					doorPosition = new Vector3(0, 0, 20);
					doorRotation = Quaternion.Euler(0, 0, 0);
					newDoorEast.transform.position = doorPosition;
					newDoorEast.transform.rotation = doorRotation;
				}
				if (goPosition.y - 10 == go2Position.y)
				{
					newDoorWest = Instantiate(noDoor);
					doorPosition = new Vector3(0, 0, 20);
					doorRotation = Quaternion.Euler(0, 0, 0);
					newDoorWest.transform.position = doorPosition;
					newDoorWest.transform.rotation = doorRotation;
				}
				else
				{
					newDoorWest = Instantiate(noDoor);
					doorPosition = new Vector3(0, 0, 20);
					doorRotation = Quaternion.Euler(0, 0, 0);
					newDoorWest.transform.position = doorPosition;
					newDoorWest.transform.rotation = doorRotation;
				}

				
			}
		}
	}

	private bool IsThereAArea(Vector3 locationNewArea)
	{
		foreach (Room go in path)
		{
			if (go != null && go.roomObject.transform.position == locationNewArea)
			{
				return true;
			}

			return false;
		}

		return false;
	}
}
