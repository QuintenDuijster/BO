using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneController : MonoBehaviour
{
	public void loadGameScene()
	{
		SceneManager.LoadScene("Game");
	}

	public void exitGame()
	{
		Application.Quit();
	}
}
